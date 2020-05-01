module Main where

import Lib

main :: IO ()
main = someFunc

tell:: (Show a) => [a] -> String
tell[] = "empty"
tell[_] = "one"
tell[_, _] = "two"
tell[_, _, _] = "more"
