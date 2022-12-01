
proc run09_2(): string =
    return "TODO"

when not defined(js):
    echo run09_2()
else:
    proc js_run09_2(): cstring {.exportc.} =
        return cstring(run09_2())
