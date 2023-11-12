<?php

namespace Modules;

/**
 * Interface RepositoryContract.
 */
interface RepositoryContract
{
    public function all(array $columns = ['*']);

    public function count();

    public function create(array $data);

    public function createMultiple(array $data);

    public function delete();

    public function deleteById($id);

    public function deleteMultipleById(array $ids);

    public function first(array $columns = ['*']);

    public function get(array $columns = ['*']);

    public function getById($id, array $columns = ['*']);

    public function getByColumn($item, $column, array $columns = ['*']);

    public function paginate($limit = 25, array $columns = ['*'], $pageName = 'page', $page = null);

    public function updateById($id, array $data, array $options = []);

    public function limit(int $limit);

    public function orderBy(string $column, $direction);

    public function where(string $column, string $value, $operator = '=');

    public function whereIn(string $column, $values);

    public function with($relations);
}
