{-# LANGUAGE CPP #-}
{-# LANGUAGE NoRebindableSyntax #-}
{-# OPTIONS_GHC -fno-warn-missing-import-lists #-}
module Paths_haskell_learning (
    version,
    getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where

import qualified Control.Exception as Exception
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude

#if defined(VERSION_base)

#if MIN_VERSION_base(4,0,0)
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#else
catchIO :: IO a -> (Exception.Exception -> IO a) -> IO a
#endif

#else
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#endif
catchIO = Exception.catch

version :: Version
version = Version [0,1,0,0] []
bindir, libdir, dynlibdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/home/bartzlo/my_porojects/haskell-learning/.stack-work/install/x86_64-linux/32fc6c28daaa9119093d3ab3261be8ae466ccc8fb2864a565abefa2c98206651/8.6.5/bin"
libdir     = "/home/bartzlo/my_porojects/haskell-learning/.stack-work/install/x86_64-linux/32fc6c28daaa9119093d3ab3261be8ae466ccc8fb2864a565abefa2c98206651/8.6.5/lib/x86_64-linux-ghc-8.6.5/haskell-learning-0.1.0.0-LCUJcNrx8Aj5yafIr6jYyf-haskell-learning-exe"
dynlibdir  = "/home/bartzlo/my_porojects/haskell-learning/.stack-work/install/x86_64-linux/32fc6c28daaa9119093d3ab3261be8ae466ccc8fb2864a565abefa2c98206651/8.6.5/lib/x86_64-linux-ghc-8.6.5"
datadir    = "/home/bartzlo/my_porojects/haskell-learning/.stack-work/install/x86_64-linux/32fc6c28daaa9119093d3ab3261be8ae466ccc8fb2864a565abefa2c98206651/8.6.5/share/x86_64-linux-ghc-8.6.5/haskell-learning-0.1.0.0"
libexecdir = "/home/bartzlo/my_porojects/haskell-learning/.stack-work/install/x86_64-linux/32fc6c28daaa9119093d3ab3261be8ae466ccc8fb2864a565abefa2c98206651/8.6.5/libexec/x86_64-linux-ghc-8.6.5/haskell-learning-0.1.0.0"
sysconfdir = "/home/bartzlo/my_porojects/haskell-learning/.stack-work/install/x86_64-linux/32fc6c28daaa9119093d3ab3261be8ae466ccc8fb2864a565abefa2c98206651/8.6.5/etc"

getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "haskell_learning_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "haskell_learning_libdir") (\_ -> return libdir)
getDynLibDir = catchIO (getEnv "haskell_learning_dynlibdir") (\_ -> return dynlibdir)
getDataDir = catchIO (getEnv "haskell_learning_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "haskell_learning_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "haskell_learning_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)
