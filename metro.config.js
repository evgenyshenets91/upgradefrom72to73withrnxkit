const {
  makeMetroConfig,
  exclusionList,
  resolveUniqueModule,
} = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const {TypeScriptPlugin} = require('@rnx-kit/metro-plugin-typescript');
const {
  DuplicateDependencies,
} = require('@rnx-kit/metro-plugin-duplicates-checker');
const {MetroSerializer} = require('@rnx-kit/metro-serializer');

const [msalPath, msalExcludePattern] = resolveUniqueModule('react-is');
const additionalExclusions = [msalExcludePattern];
const blockList = exclusionList(additionalExclusions);

module.exports = makeMetroConfig({
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
    extraNodeModules: {
      'react-is': msalPath,
    },
    blockList,
  },
  serializer: {
    experimentalSerializerHook: TypeScriptPlugin(),
    customSerializer: MetroSerializer([DuplicateDependencies()]),
  },
});
