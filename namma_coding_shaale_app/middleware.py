import time
import logging

logger = logging.getLogger('request_logger')


class RequestLoggingMiddleware:
    """
    Middleware to log every incoming request with:
    - HTTP method & path
    - User identifier (email if logged in, IP if anonymous)
    - User-Agent (truncated)
    - Response status code
    - Response time in ms
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Skip static file requests to reduce noise
        if request.path.startswith('/static/'):
            return self.get_response(request)

        start_time = time.time()

        response = self.get_response(request)

        duration_ms = int((time.time() - start_time) * 1000)

        # Build user identifier
        if request.user.is_authenticated:
            user_id = f"user:{request.user.email}"
        else:
            x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
            if x_forwarded_for:
                ip = x_forwarded_for.split(',')[0].strip()
            else:
                ip = request.META.get('REMOTE_ADDR', 'unknown')
            user_id = f"ip:{ip}"

        # Truncate User-Agent to keep logs clean
        user_agent = request.META.get('HTTP_USER_AGENT', 'unknown')
        if len(user_agent) > 80:
            user_agent = user_agent[:80] + '...'

        logger.info(
            f"REQUEST | {request.method} {request.path} | {user_id} | "
            f"UA:{user_agent} | {response.status_code} | {duration_ms}ms"
        )

        return response
