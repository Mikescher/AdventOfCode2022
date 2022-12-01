
proc run22_2(): string =
    return "TODO"

when not defined(js):
    echo run22_2()
else:
    proc js_run22_2(): cstring {.exportc.} =
        return cstring(run22_2())
