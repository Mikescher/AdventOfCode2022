
proc run22_2(): string =
    const input = staticRead"../input/day22.txt"

    return "TODO"

when not defined(js):
    echo run22_2()
else:
    proc js_run22_2(): cstring {.exportc.} =
        return cstring(run22_2())
