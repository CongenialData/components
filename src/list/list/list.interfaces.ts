// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListStyleProps {}

export interface ListComponentProps {
  ref?: React.Ref<HTMLDivElement>;
  ordered?: boolean;
}

export interface ListProps extends ListComponentProps, ListStyleProps {
  children?: React.ReactNode;
  className?: string;
}
