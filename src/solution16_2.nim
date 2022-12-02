
proc run16_2(): string =
    const input = staticRead"../input/day16.txt"

    return "TODO"

when not defined(js):
    echo run16_2()
else:
    proc js_run16_2(): cstring {.exportc.} =
        return cstring(run16_2())
