
proc run24_2(): string =
    const input = staticRead"../input/day24.txt"

    return "TODO"

when not defined(js):
    echo run24_2()
else:
    proc js_run24_2(): cstring {.exportc.} =
        return cstring(run24_2())
