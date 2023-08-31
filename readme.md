# Canto tutorial

A static site with canto documentation for users to get started with Canto. The website is deployed every time a commit to master is made and can be accessed at https://pombase.github.io/canto_tutorial/.

## Run locally

For Val, if you have not added poetry to the path, use `.local/bin/poetry` instead of poetry.

### Install dependencies

To install the dependencies, we used poetry (see [poetry installation instructions](https://python-poetry.org/docs/)). In the source directory run:

```bash
# install dependencies in ./.venv
poetry install
```

### Run a dev server that gets updated as you type

```bash
# activate virtual environment
poetry shell
# start dev server
mkdocs serve
```

Go to http://127.0.0.1:8000/ and you should see the page.

## Adding content

Full documentation on the theme and static site generator used (Material for MkDocs) can be found in the [official documentation](https://squidfunk.github.io/mkdocs-material/).

* Converting videos to gifs: `ffmpeg –i input.mp4 -loop 0 output.gif`

## Content license

The content of this website are licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
