
proc run14_2(): string =
    return "TODO"

when not defined(js):
    echo run14_2()
else:
    proc js_run14_2(): cstring {.exportc.} =
        return cstring(run14_2())
