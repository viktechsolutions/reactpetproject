export type BuildMode = 'production' | 'development'
export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}
export enum BuildEnvVariants {
    production = 'production',
    development = 'development'
}
export interface BuildEnv {
    mode: BuildMode
    port: number
}
export interface BuildOptions {
    port: number;
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
}