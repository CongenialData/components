import styled, { css } from 'styled-components/macro'
import { SkeletonStyleProps } from './skeleton.interfaces'

const SkeletonPulse = styled.div<SkeletonStyleProps>`
  display: inline-block;
  height: 100%;
  width: 100%;

  background: ${({ translucent, theme }) =>
    translucent
      ? css`linear-gradient(-90deg, ${theme.Skeleton.gradient.translucent.from} 0%, ${theme.Skeleton.gradient.translucent.to} 50%, ${theme.Skeleton.gradient.translucent.from} 100%)`
      : css`linear-gradient(-90deg, ${theme.Skeleton.gradient.default.from} 0%, ${theme.Skeleton.gradient.default.to} 50%, ${theme.Skeleton.gradient.default.from} 100%)`};

  background-size: 400% 400%;
  animation: herp 1.2s ease-in-out infinite;

  @keyframes herp {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`

export const SkeletonLine = styled(SkeletonPulse)<SkeletonStyleProps>`
  width: ${({ theme, width }) =>
    width === undefined
      ? theme.Skeleton.width.default
      : theme.Skeleton.width[width] === undefined
      ? width
      : theme.Skeleton.width[width]};

  border-radius: 5px;
  display: flex;

  height: ${({ height, theme }) =>
    height === undefined
      ? theme.Skeleton.height.default
      : theme.Skeleton.height[height] === undefined
      ? height
      : theme.Skeleton.height[height]};

  &::before {
    content: '\\00a0';
  }
`
