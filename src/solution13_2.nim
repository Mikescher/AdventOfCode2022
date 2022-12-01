
proc run13_2(): string =
    return "TODO"

when not defined(js):
    echo run13_2()
else:
    proc js_run13_2(): cstring {.exportc.} =
        return cstring(run13_2())
