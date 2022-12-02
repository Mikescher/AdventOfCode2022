
proc run13_2(): string =
    const input = staticRead"../input/day13.txt"

    return "TODO"

when not defined(js):
    echo run13_2()
else:
    proc js_run13_2(): cstring {.exportc.} =
        return cstring(run13_2())
