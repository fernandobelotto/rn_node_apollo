import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";

type Props = {};

const Books = (props: Props) => {
  const GET_GREETING = gql`
    query ExampleQuery {
      books {
        title
        id
        author
      }
    }
  `;

  const [trigger, { loading, error, data }] = useLazyQuery(GET_GREETING);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;

  return (
    <View>
      <Button
        title="Get Titles"
        onPress={() => trigger()}
      />
      {data?.books.map((book: any) => (
        <Text
          style={{ fontSize: 26 }}
          key={book.id}
        >
          {book.title}
        </Text>
      ))}
    </View>
  );
};

export default Books;
