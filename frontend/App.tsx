import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StyleSheet, View } from "react-native";
import Books from "./Books";

const client = new ApolloClient({
  uri: "https://3158-201-43-91-89.sa.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Books />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
