import { useCallback, useEffect, useMemo, useRef } from 'react';

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import { useBottomSheetStore } from '../../store/bottom-sheet-store';
import { colors } from '../../../styles/colors';

export function AppBottomSheet() {
  const { isOpen, config, content, close } = useBottomSheetStore();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => {
    return config?.snapPoints || ['80%', '90%'];
  }, [config.snapPoints]);

  /**
   * FECHAR O BOTTOM SHEET QUANDO CLICADO FORA DELE
   * E O COMPORTAMENTO DE ESCURECER A TELA QUE ESTÁ EMBAIXO (OVERLAY)
   */
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        pressBehavior="close"
      />
    ),
    []
  );

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen && content) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isOpen, content]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      backgroundStyle={{
        backgroundColor: colors.background,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
      enablePanDownToClose={config.enablePanDownToClose ?? true}
      index={-1}
      snapPoints={snapPoints}
      animateOnMount
      backdropComponent={renderBackdrop}
      onChange={handleSheetChanges}
    >
      <BottomSheetScrollView>{content}</BottomSheetScrollView>
    </BottomSheet>
  );
}
