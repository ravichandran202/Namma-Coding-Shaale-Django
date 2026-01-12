import os
import logging
import pymysql

# 1. Install MySQL Driver
pymysql.install_as_MySQLdb()
from opentelemetry.instrumentation.pymysql import PyMySQLInstrumentor

HONEYCOMB_API_KEY = os.environ.get('HONEYCOMB_API_KEY')

# 2. Hardcoded Setup (Move these to .env for production!)
os.environ["OTEL_SERVICE_NAME"] = "NAMMA_CODING_SHAALE"
os.environ["OTEL_EXPORTER_OTLP_ENDPOINT"] = "https://api.honeycomb.io"
# SECURITY WARNING: Put this actual key in your .env file, not here!
os.environ["OTEL_EXPORTER_OTLP_HEADERS"] = f"x-honeycomb-team={HONEYCOMB_API_KEY}"
os.environ["OTEL_PYTHON_LOG_CORRELATION"] = "true"


from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter

from opentelemetry import _logs
from opentelemetry.sdk._logs import LoggerProvider, LoggingHandler
from opentelemetry.sdk._logs.export import BatchLogRecordProcessor
from opentelemetry.exporter.otlp.proto.http._log_exporter import OTLPLogExporter

from opentelemetry.instrumentation.django import DjangoInstrumentor

def setup_opentelemetry():
    # A. Setup Tracing
    trace.set_tracer_provider(TracerProvider())
    otlp_exporter = OTLPSpanExporter()
    span_processor = BatchSpanProcessor(otlp_exporter)
    trace.get_tracer_provider().add_span_processor(span_processor)

    # B. Setup Logging
    logger_provider = LoggerProvider()
    _logs.set_logger_provider(logger_provider)
    log_exporter = OTLPLogExporter()
    logger_provider.add_log_record_processor(BatchLogRecordProcessor(log_exporter))
    
    # C. Connect OTel Logging to Python's Standard Logging
    # This captures all "logger.info()" calls from Django
    handler = LoggingHandler(level=logging.NOTSET, logger_provider=logger_provider)
    logging.getLogger().addHandler(handler)

    # D. Instrument Libraries
    PyMySQLInstrumentor().instrument()
    DjangoInstrumentor().instrument()