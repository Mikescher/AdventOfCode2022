
proc run04_2(): string =
    return "TODO"

when not defined(js):
    echo run04_2()
else:
    proc js_run04_2(): cstring {.exportc.} =
        return cstring(run04_2())
