
proc run19_2(): string =
    const input = staticRead"../input/day19.txt"

    return "TODO"

when not defined(js):
    echo run19_2()
else:
    proc js_run19_2(): cstring {.exportc.} =
        return cstring(run19_2())
