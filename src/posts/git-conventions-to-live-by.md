# Git conventions and standards to live by

## Motivations

* Define a common set of best practices for what should go in a commit message
* The main goal is to make code changes easier to review (leads to a happy team leads) and have a git history that is useful in case of investigation / revert
* Most importantly it will standardize the way we use git rebase across teams

### Good reads

* https://wiki.openstack.org/wiki/GitCommitMessages
* http://chris.beams.io/posts/git-commit
* https://github.com/blog/1943-how-to-write-the-perfect-pull-request

## Naming

### Branches

* Features will be: `concise-name-of-feature`
* Bugs will be: `BUG-123`
* Other tickets will be: `ABC-123`

#### Notes

* Kebab case (separated-like-this) lower case (unless bug or ticket)
* No need for `feature/` or `bug/` or `whatever/` prefix
* Not too long
* Almost pun less

### Commit

#### Subject should

* be limited to 50 characters
* start with a Capital letter
* not end with a period
* use the imperative mood in the subject line (If applied, this commit will …subject… )
* **EXAMPLE**: `Add internal route for search`

#### Body should

* be separated from body with a blank line
* be wrapped at 72 characters
* explain what and why vs. how
* mention ticket at the last line:  `Resolves BUG-123`

## The content

* One "logical change" per commit (No `Fix typo` commit in PR ever!!!)
* Too many changes in a commit is a sign to split it
* Separate commit when formatting
* Mark unpolished commit with `[WIP]`, or `[F]`/`[S]` for commits that should be fixed-up or squashed
* Add subject prefix `[PR-FIX]` for fixes after PR comments
* Squash PR-FIX to the commit it belongs to after approval
* Add subject prefix `[DROP]` for commits that will be dropped after final rebase (extra logging , etc …)
* Open a PR even if no review is needed for now (encourages commit often mode), allow for easier self-review, can ask early feedback to reviewer if needed
* Request a review when part or all commits are ready
* Every commit needs to be compilable/not break the build

## Rebase workflow

* No more merge commits in develop and master
* No more `gitflow`
* Always use `git rebase -i develop`
* Use `git merge --ff-only`, if it fails you did something wrong
* Delete your branch locally and on remote after merge
* **Do self-review before submitting to an actual reviewer**
* Do not merge to master without at least one `LGTM` in your PR comments
* Use same feature branch name for same feature across services (i.e `amazing-feature` in UI, API, Infra etc.)
* Add comments in your PR before the review to explain why you are doing something at the code level

## PR Review rules and workflow

* Pull request >= any other task
* Request changes more than you approve them
* Dedicate time to CR as part of sprint planning
* Split big PRs
* Assign specific reviewers
* PR templates
* Pair programming FTW
* Be polite :)
* Review commit by commit
