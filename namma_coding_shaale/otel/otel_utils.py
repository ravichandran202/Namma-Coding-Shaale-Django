# otel_utils.py
import functools
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

def trace_span(name=None):
    """
    Decorator to trace a view or function.
    Usage:
    @trace_span  <-- Uses function name as span name
    or
    @trace_span("my-custom-name") <-- Uses custom name
    """
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # If name is not provided, use the function's name
            span_name = name if name else func.__name__
            
            with tracer.start_as_current_span(span_name):
                return func(*args, **kwargs)
        return wrapper

    # This trick allows using @trace_span without brackets
    if callable(name):
        func = name
        name = None
        return decorator(func)
    
    return decorator