import type {Configuration as WebpackConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/config";

export function buildDevServer(options: BuildOptions): WebpackConfiguration {
    return {
         port: options.port,
         open: true,
         historyApiFallback: true,
         hot: true
    }
}