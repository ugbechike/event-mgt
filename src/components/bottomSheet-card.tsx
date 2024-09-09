import React, {ReactNode, useCallback, useMemo} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {theme} from '../theme';

interface BottomSheetCardProps {
  children: ReactNode;
}

export const BottomSheetCard = React.forwardRef<
  BottomSheet,
  BottomSheetCardProps
>(({children, ...rest}: BottomSheetCardProps, ref) => {
  const snapPoints = useMemo(() => ['60%', '80%', '90%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );
  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      {...rest}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      backgroundStyle={{backgroundColor: theme.colors.primary}}
      handleIndicatorStyle={{backgroundColor: theme.colors.grey}}
      animateOnMount={true}>
      {children}
    </BottomSheet>
  );
});
