import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.counterText}>{count}</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonPlus}
            onPress={() => setCount((c) => c + 1)}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonPlusText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonReset}
            onPress={() => setCount(0)}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonResetText}>Сброс</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  counterText: {
    fontSize: 72,
    fontWeight: '300',
    color: '#111',
    marginBottom: 48,
  },
  buttons: {
    alignItems: 'center',
    gap: 16,
  },
  buttonPlus: {
    backgroundColor: '#2563eb',
    width: 160,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlusText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
  buttonReset: {
    backgroundColor: '#f1f5f9',
    width: 160,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonResetText: {
    color: '#475569',
    fontSize: 16,
    fontWeight: '500',
  },
});
