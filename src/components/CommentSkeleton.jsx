import ContentLoader from 'react-content-loader'

export function CommentSkeleton (props) {
  return (
    <ContentLoader
      speed={1}
      width={800}
      height={100}
      viewBox='0 0 800 100'
      backgroundColor='#e4e4e4'
      foregroundColor='#e8e8e3'
      {...props}
    >
      <rect x='10' y='4' rx='0' ry='0' width='105' height='8' />
      <rect x='120' y='4' rx='0' ry='0' width='95' height='8' />
      <rect x='10' y='20' rx='0' ry='0' width='700' height='100' />
    </ContentLoader>
  )
}
