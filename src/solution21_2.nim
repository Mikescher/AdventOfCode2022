
proc run21_2(): string =
    return "TODO"

when not defined(js):
    echo run21_2()
else:
    proc js_run21_2(): cstring {.exportc.} =
        return cstring(run21_2())
