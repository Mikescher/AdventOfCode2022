
proc run10_2(): string =
    return "TODO"

when not defined(js):
    echo run10_2()
else:
    proc js_run10_2(): cstring {.exportc.} =
        return cstring(run10_2())
