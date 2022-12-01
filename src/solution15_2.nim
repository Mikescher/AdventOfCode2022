
proc run15_2(): string =
    return "TODO"

when not defined(js):
    echo run15_2()
else:
    proc js_run15_2(): cstring {.exportc.} =
        return cstring(run15_2())
