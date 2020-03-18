
import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColStart = styled(Column)`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ColCenter = styled(Column)`
  justify-content: center;
  align-items: flex-start;
`;

export const ColEnd = styled(Column)`
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ColSpaceBetween = styled(Column)`
  justify-content: space-between;
  align-items: flex-start;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RowStart = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const RowCenter = styled(Row)`
  justify-content: center;
  align-items: flex-start;
`;

export const RowEnd = styled(Row)`
  justify-content: flex-end;
  align-items: flex-start;
`;

export const RowSpaceBetween = styled(Row)`
  justify-content: space-between;
  align-items: flex-start;
`;

export const OverflowLine = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  white-space: pre-line;
`;

export const OverflowLine1 = styled(OverflowLine)`
  -webkit-line-clamp: 1;
`;

export const OverflowLine2 = styled(OverflowLine)`
  -webkit-line-clamp: 2;
`;

export const OverflowLine3 = styled(OverflowLine)`
  -webkit-line-clamp: 3;
`;

export const LayoutBox = styled(ColCenter)`
  align-items: center;
  width: 100%;
  margin: 64px 0;
`;
