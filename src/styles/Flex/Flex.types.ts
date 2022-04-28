export interface FlexProps {
  flex?: number;
  column?: boolean;
  justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'center';
  alignItems?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'center';
}