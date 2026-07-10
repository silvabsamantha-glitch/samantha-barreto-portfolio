import functools
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

port = int(sys.argv[1]) if len(sys.argv) > 1 else 5500
directory = sys.argv[2] if len(sys.argv) > 2 else "/Users/samantha/Documents/samantha-barreto-portfolio-main"

handler = functools.partial(SimpleHTTPRequestHandler, directory=directory)
HTTPServer(("127.0.0.1", port), handler).serve_forever()
