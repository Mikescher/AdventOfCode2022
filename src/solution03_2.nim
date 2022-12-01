
proc run03_2(): string =
    return "TODO"

when not defined(js):
    echo run03_2()
else:
    proc js_run03_2(): cstring {.exportc.} =
        return cstring(run03_2())
