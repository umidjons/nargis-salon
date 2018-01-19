<?php

const FILE_NAME = '/home/umidjons/public_html/insta_feeds.json';

function get_insta_feeds()
{
    $USER_NAME    = 'beauty_nargis_salon';
    $QUERY        = urlencode("select * from json where url='https://www.instagram.com/${USER_NAME}/?__a=1'");
    $QUERY_STRING = "?q=${QUERY}&format=json&_${USER_NAME}";
    $URL          = "https://query.yahooapis.com/v1/public/yql${QUERY_STRING}";

    $content = file_get_contents($URL);
    $result  = json_decode($content, true);

    // print_r($result);

    if (isset($result['query']['results']['json']['user']['media']['nodes'])) {
        return $result['query']['results']['json']['user']['media']['nodes'];
    }

    return [];
}

function normalize($node)
{
    return [
        'href'          => 'https://www.instagram.com/p/' . $node['code'],
        'thumbnail_src' => $node['thumbnail_src'],
    ];
}

function normalize_items($nodes)
{
    $items = [];

    foreach ($nodes as $node) {
        $items[] = normalize($node);
    }

    return $items;
}

function save_to_file($file_path, array $items)
{
    $items = normalize_items($items);
    print_r($items);
    $content = json_encode($items, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    file_put_contents($file_path, $content);
}

function main()
{

    $feeds = get_insta_feeds();
    if ($feeds) {
        save_to_file(FILE_NAME, $feeds);
    }
}

main();
