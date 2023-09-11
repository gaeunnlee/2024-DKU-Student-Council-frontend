module.exports = {
   extends: ['@commitlint/config-conventional'],
   plugins: [
      {
         rules: {
            'develop-rule': ({ subject }) => {
               const regex =
                  /^(develop|feat|fix|hotfix|release|revert|style|test|docs|chore|build|ci|perf|refactor|wip)(\(.+\))?: .{1,50}/;
               return [
                  regex.test(subject),
                  '다음 중 한가지 header를 포함해야합니다.\ndevelop|feat|fix|hotfix|release|revert|style|test|docs|chore|build|ci|perf|refactor|wip',
               ];
            },
         },
      },
   ],
};
