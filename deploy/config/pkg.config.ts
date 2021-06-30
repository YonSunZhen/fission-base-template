export interface PkgInfo {
  name: string; 
  env: string; 
  src: string
}

export const PKG_CONFIG: PkgInfo = {
  name: 'sync-plm',
  env: 'nodejs',
  src: './dist/plm.zip'
};