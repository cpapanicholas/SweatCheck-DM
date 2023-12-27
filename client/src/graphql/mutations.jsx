import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation SendMessage($sender: String!, $recipient: String!, $text: String!) {
    sendMessage(sender: $sender, recipient: $recipient, text: $text) {
      id
      sender
      recipient
      text
    }
  }
`;