export interface ILayoutContainer {
  children: JSX.Element | null
}

export const LayoutContainer: React.FC<ILayoutContainer> = ({
  children,
}: ILayoutContainer) =>{
  return <div className='container'>{children}</div>

}