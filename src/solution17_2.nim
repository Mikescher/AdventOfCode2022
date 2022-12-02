
proc run17_2(): string =
    const input = staticRead"../input/day17.txt"

    return "TODO"

when not defined(js):
    echo run17_2()
else:
    proc js_run17_2(): cstring {.exportc.} =
        return cstring(run17_2())
