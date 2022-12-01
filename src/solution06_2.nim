
proc run06_2(): string =
    return "TODO"

when not defined(js):
    echo run06_2()
else:
    proc js_run06_2(): cstring {.exportc.} =
        return cstring(run06_2())
