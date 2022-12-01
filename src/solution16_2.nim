
proc run16_2(): string =
    return "TODO"

when not defined(js):
    echo run16_2()
else:
    proc js_run16_2(): cstring {.exportc.} =
        return cstring(run16_2())
