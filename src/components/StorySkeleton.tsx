import ContentLoader from 'react-content-loader'

export function StorySkeleton () {
  return (
    <ContentLoader
      speed={1}
      width={640}
      height={40}
      viewBox='0 0 640 40'
      backgroundColor='#e4e4e4'
      foregroundColor='#e8e8e3'
    >
      <rect x='8' y='4' rx='0' ry='0' width='500' height='14' />
      <rect x='10' y='20' rx='0' ry='0' width='105' height='8' />
      <rect x='120' y='20' rx='0' ry='0' width='95' height='8' />
      <rect x='220' y='20' rx='0' ry='0' width='95' height='8' />
    </ContentLoader>
  )
}
