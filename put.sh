#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"

readonly SRC="themes/atom-one-light.json"
readonly DEST_WIN='C:\Users\nlnk\AppData\Roaming\Zed\themes'

npm_path=$(command -v npm || true)
[[ -n $npm_path ]] || { echo "npm not found in PATH" >&2; exit 1; }
[[ $npm_path != /mnt/* ]] || { echo "npm resolves to Windows binary: $npm_path" >&2; exit 1; }

rm -f -- "$SRC"

npm run build

[[ -f $SRC ]] || { echo "build finished but $SRC was not produced" >&2; exit 1; }

dest=$(wslpath -u "$DEST_WIN")
[[ -d /mnt/c ]] || { echo "/mnt/c not mounted (automount disabled?)" >&2; exit 1; }

mkdir -p -- "$dest"
cp -fv -- "$SRC" "$dest/"
