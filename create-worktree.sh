#!/bin/bash
# This script creates a new Git worktree for a specified branch.
if [ $# -eq 0 ]; then
    echo "Error: 워크트리 이름을 지정해야 합니다."
    exit 1
fi
# 첫 번째 인수를 워크트리 이름으로 사용
ARGUMENT=$1
WORKTREE_PATH="../worktrees/$ARGUMENT"
# 워크트리 생성하고 성공하면 현재 위치 변경 후 CLAUDE 실행
if git worktree add "$WORKTREE_PATH"; then
    echo "워크트리가 성공적으로 생성되었습니다: $WORKTREE_PATH"
    cd "$WORKTREE_PATH" || return 1
    echo "현재 디렉토리: $(pwd)"
    claude

    # 여기에 CLAUDE 실행 명령어를 추가하세요
    # 예: claude --some-option
else
    echo "워크트리 생성에 실패했습니다."
    return 1
fi