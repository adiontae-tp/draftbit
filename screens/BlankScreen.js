import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const BlankScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View style={styles(theme).View82a4c91d}>
        <Text style={styles(theme).Texta7c3dbcd}>{'Team Parcee'}</Text>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Texta7c3dbcd: { alignSelf: 'center', color: theme.colors.strong },
    View82a4c91d: {
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
    },
  });

export default withTheme(BlankScreen);
