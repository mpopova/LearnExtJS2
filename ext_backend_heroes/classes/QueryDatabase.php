<?php

 class QueryDatabase {

    private $_db;
    protected $_result;
    public $results;

    // public function __construct() {
    //     $this->_db = new mysqli('localhost', 'root' ,'', 'heroes');

    //     $_db = $this->_db;

    //     if ($_db->connect_error) {
    //         die('Connection Error: ' . $_db->connect_error);
    //     }

    //     return $_db;
    // }

    public function getResults() {
        $this->_db = new mysqli('localhost', 'root' ,'', 'heroes');
        $_db = $this->_db;

        $_result = $_db->query("SELECT name,email,phone FROM heroes") or
                   die('Connection Error: ' . $_db->connect_error);

        $results = array();

        while ($row = $_result->fetch_assoc()) {
            array_push($results, $row);
        }

        $this->_db->close();

        return $results;
    }

    public function getResultsShips() {
        $this->_db = new mysqli('localhost', 'root' ,'', 'ships');
        $_db = $this->_db;

        $_result = $_db->query("SELECT ship_name, ship_type, ship_flag FROM ship_info") or
                   die('Connection Error: ' . $_db->connect_error);

        $results = array();

        while ($row = $_result->fetch_assoc()) {
            array_push($results, $row);
        }

        $this->_db->close();

        return $results;
    }

 }