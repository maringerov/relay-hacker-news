import babelRelayPlugin from 'babel-relay-plugin';
import { introspectionQuery } from 'graphql/utilities';
import request from 'sync-request';

const graphqlHubUrl = 'http://www.GraphQLHub.com/graphql';
const response = request('GET', graphqlHubUrl, {
  qs: {
    query: introspectionQuery
  }
});

const schema = JSON.parse(response.body.toString('utf-8'));

export default babelRelayPlugin(schema.data, {
  abortOnError: true
});
