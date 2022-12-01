
proc run19_2(): string =
    return "TODO"

when not defined(js):
    echo run19_2()
else:
    proc js_run19_2(): cstring {.exportc.} =
        return cstring(run19_2())
