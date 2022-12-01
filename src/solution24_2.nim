
proc run24_2(): string =
    return "TODO"

when not defined(js):
    echo run24_2()
else:
    proc js_run24_2(): cstring {.exportc.} =
        return cstring(run24_2())
