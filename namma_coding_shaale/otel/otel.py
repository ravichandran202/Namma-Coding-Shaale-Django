import os
import logging
import pymysql                            # <--- NEW
pymysql.install_as_MySQLdb()
from opentelemetry.instrumentation.pymysql import PyMySQLInstrumentor
# --- 1. Hardcoded OpenTelemetry Setup ---
# (Place this BEFORE importing Django or other libs)

# YOUR HONEYCOMB API KEY HERE
HONEYCOMB_API_KEY = os.environ.get('HONEYCOMB_API_KEY')

# Hardcoding Environment Variables
os.environ["OTEL_SERVICE_NAME"] = "NAMMA_CODING_SHAALE"
os.environ["OTEL_EXPORTER_OTLP_ENDPOINT"] = "https://api.honeycomb.io"
os.environ["OTEL_EXPORTER_OTLP_HEADERS"] = f"x-honeycomb-team={HONEYCOMB_API_KEY}"
# We use HTTP for better compatibility
os.environ["OTEL_EXPORTER_OTLP_PROTOCOL"] = "http/protobuf" 

from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter

from opentelemetry import _logs
from opentelemetry.sdk._logs import LoggerProvider, LoggingHandler
from opentelemetry.sdk._logs.export import BatchLogRecordProcessor
from opentelemetry.exporter.otlp.proto.http._log_exporter import OTLPLogExporter
from opentelemetry.sdk.resources import Resource

def setup_opentelemetry():
    PyMySQLInstrumentor().instrument()

    # A. Setup Tracing (Requests & Spans)
    trace.set_tracer_provider(TracerProvider())
    otlp_exporter = OTLPSpanExporter()
    span_processor = BatchSpanProcessor(otlp_exporter)
    trace.get_tracer_provider().add_span_processor(span_processor)

    # B. Setup Logging (Sending Python logs to Honeycomb)
    logger_provider = LoggerProvider()
    _logs.set_logger_provider(logger_provider)
    log_exporter = OTLPLogExporter()
    logger_provider.add_log_record_processor(BatchLogRecordProcessor(log_exporter))
    
    # Attach OTel handler to the Root Logger so it catches ALL Django logs
    handler = LoggingHandler(level=logging.NOTSET, logger_provider=logger_provider)
    logging.getLogger().addHandler(handler)

    # C. Auto-Instrument Django
    # This automatically traces all your views and DB queries
    from opentelemetry.instrumentation.django import DjangoInstrumentor
    DjangoInstrumentor().instrument()

# --- End of OpenTelemetry Setup ---
