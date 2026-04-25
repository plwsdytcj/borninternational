#!/usr/bin/env bash
set -euo pipefail
PORT="${PORT:-3050}"
echo ""
echo "  Local:   http://127.0.0.1:${PORT}"
echo "  (Avoid http://localhost:3000 — Cursor often uses that port.)"
echo ""
exec pnpm exec next dev -p "${PORT}"
